import { useEffect, useState, useRef, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';


const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = useCallback(() => {
        const countdownDate = new Date('August 19, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop time
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    },[]);

    useEffect(() => {
        startTimer();
        // console.log(1); useCallback ^ to 
        return () => {
            clearInterval(interval.current);
        }
    }, [startTimer]);

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.border}>
                    <View style={styles.spacing}>
                        <Text style={styles.text}>{timerDays} : </Text>
                        <Text style={styles.subText}> Days </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{timerHours} : </Text>
                        <Text style={styles.subText}> Hrs </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{timerMinutes} : </Text>
                        <Text style={styles.subText}> Mins </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{timerSeconds}</Text>
                        <Text style={styles.subText}> Secs </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        alignSelf:'center',
        paddingTop: 10,
        paddingBottom: 10,
        
        // borderRadius: 50,
    },
    spacing: {
        
    },
    border: {
        borderWidth: 1,
        borderColor: "thistle",
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between'
    },
    subText: {
        fontSze: 10,
    },
    text: {
        fontSize: 20,
    },
  });

export default CountdownTimer;