import { View, Text, Image, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const TourScreen = ({ route, navigation }) => {
    return (
        <View style={{
            flex:1,
            padding: 16,
            backgroundColor:'#FFF'
        }}>

            <View style={{marginTop: 32}}>
                <Image source={require('../../assets/view_1.png')}
                style={{
                    width: 380,
                    resizeMode: 'cover',
                    borderRadius: 16
                }}/>
                <View style={{
                    position:'absolute',
                    bottom: 20,
                    left: 20,
                    flexDirection:'row',
                    backgroundColor:'rgba(0,0,0,0.6)',
                    padding: 8,
                    borderRadius: 32
                }}>
                    <Image source={require('../../assets/user_1.png')}/>
                    <View style={{marginLeft: 8}}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF'
                        }}>Clay Washington</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color:'#FFF'
                        }}>Location Guide</Text>
                    </View>
                </View>
            </View>

            <Text style={{
                fontSize: 32,
                fontWeight: '600',
                color:'#242424',
                marginTop: 16
            }}>Yosemite National Park</Text>

            <Text style={{
                color:'#222222',
                lineHeight: 24
            }}>Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. </Text>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop: 8
            }}>
                <Text style={{
                    color:'#EB5757',
                    fontSize: 16,
                    fontWeight: '600',
                    marginRight: 8
                }}>Read More</Text>
                <FontAwesome5 name='chevron-down' size={16} color='#EB5757'/>
            </View>

            
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop: 16
            }}>

                <View style={{
                    paddingHorizontal: 12,
                    paddingVertical: 24,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#F8F8F8',
                    borderRadius: 16
                }}>
                    <FontAwesome5 name='credit-card' size={16} color='#8DBCE8' />
                    <Text style={{
                        color:'#222222',
                        marginTop: 4
                    }}>From 90$</Text>
                </View>

                <View style={{
                    paddingHorizontal: 12,
                    paddingVertical: 24,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#F8F8F8',
                    borderRadius: 16
                }}>
                    <FontAwesome5 name='bus' size={16} color='#FFC187' />
                    <Text style={{
                        color:'#222222',
                        marginTop: 4
                    }}>6 People</Text>
                </View>

                <View style={{
                    paddingHorizontal: 12,
                    paddingVertical: 24,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#F8F8F8',
                    borderRadius: 16
                }}>
                    <FontAwesome5 name='hamburger' size={16} color='#81D4A3' />
                    <Text style={{
                        color:'#222222',
                        marginTop: 4
                    }}>Free Lunch</Text>
                </View>

                <View style={{
                    paddingHorizontal: 12,
                    paddingVertical: 24,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#F8F8F8',
                    borderRadius: 16
                }}>
                    <FontAwesome5 name='hospital' size={16} color='#A8BAC5' />
                    <Text style={{
                        color:'#222222',
                        marginTop: 4
                    }}>Insurance</Text>
                </View>

            </View>

            <TouchableOpacity style={{
                backgroundColor:'#FF678B',
                justifyContent:'center',
                alignItems:'center',
                borderRadius: 16,
                padding: 16,
                marginTop: 16
            }}>
                <Text style={{
                    color:'#FFF',
                    fontSize: 24,
                    fontWeight: 600
                }}>Buy a tour</Text>
            </TouchableOpacity>



        </View>
    );
};

export default TourScreen;